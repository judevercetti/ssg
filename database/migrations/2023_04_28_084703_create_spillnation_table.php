<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blog', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('description')->nullable();
            $table->unsignedBigInteger('category')->index('blog_category_foreign');
            $table->text('content');
            $table->string('imageurl');
            $table->unsignedBigInteger('uploadedby')->index('blog_uploadedby_foreign');
            $table->timestamps();
        });

        Schema::create('blog_category', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('slug')->nullable()->unique();
            $table->string('description')->nullable();
            $table->timestamps();
        });

        Schema::create('blog_comment', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->index('blog_comment_user_id_foreign');
            $table->unsignedBigInteger('blog_id')->index('blog_comment_blog_id_foreign');
            $table->text('body');
            $table->unsignedBigInteger('parent_id')->nullable()->index('blog_comment_parent_id_foreign');
            $table->timestamps();
        });

        Schema::create('blog_comment_like', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->index('blog_comment_like_user_id_foreign');
            $table->unsignedBigInteger('comment_id')->index('blog_comment_like_comment_id_foreign');
            $table->timestamps();
        });

        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('uuid')->unique();
            $table->text('connection');
            $table->text('queue');
            $table->longText('payload');
            $table->longText('exception');
            $table->timestamp('failed_at')->useCurrent();
        });

        Schema::create('oauth_access_tokens', function (Blueprint $table) {
            $table->string('id', 100)->primary();
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->unsignedBigInteger('client_id');
            $table->string('name')->nullable();
            $table->text('scopes')->nullable();
            $table->boolean('revoked');
            $table->timestamps();
            $table->dateTime('expires_at')->nullable();
        });

        Schema::create('oauth_auth_codes', function (Blueprint $table) {
            $table->string('id', 100)->primary();
            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('client_id');
            $table->text('scopes')->nullable();
            $table->boolean('revoked');
            $table->dateTime('expires_at')->nullable();
        });

        Schema::create('oauth_clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->string('name');
            $table->string('secret', 100)->nullable();
            $table->string('provider')->nullable();
            $table->text('redirect');
            $table->boolean('personal_access_client');
            $table->boolean('password_client');
            $table->boolean('revoked');
            $table->timestamps();
        });

        Schema::create('oauth_personal_access_clients', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('client_id');
            $table->timestamps();
        });

        Schema::create('oauth_refresh_tokens', function (Blueprint $table) {
            $table->string('id', 100)->primary();
            $table->string('access_token_id', 100)->index();
            $table->boolean('revoked');
            $table->dateTime('expires_at')->nullable();
        });

        Schema::create('password_resets', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tokenable_type');
            $table->unsignedBigInteger('tokenable_id');
            $table->string('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable();
            $table->timestamps();

            $table->index(['tokenable_type', 'tokenable_id']);
        });

        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('image')->nullable();
            $table->integer('role')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::table('blog', function (Blueprint $table) {
            $table->foreign(['uploadedby'])->references(['id'])->on('users');
            $table->foreign(['category'])->references(['id'])->on('blog_category');
        });

        Schema::table('blog_comment', function (Blueprint $table) {
            $table->foreign(['parent_id'])->references(['id'])->on('blog_comment')->onDelete('CASCADE');
            $table->foreign(['blog_id'])->references(['id'])->on('blog')->onDelete('CASCADE');
            $table->foreign(['user_id'])->references(['id'])->on('users')->onDelete('CASCADE');
        });

        Schema::table('blog_comment_like', function (Blueprint $table) {
            $table->foreign(['user_id'])->references(['id'])->on('users')->onDelete('CASCADE');
            $table->foreign(['comment_id'])->references(['id'])->on('blog_comment')->onDelete('CASCADE');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('blog_comment_like', function (Blueprint $table) {
            $table->dropForeign('blog_comment_like_user_id_foreign');
            $table->dropForeign('blog_comment_like_comment_id_foreign');
        });

        Schema::table('blog_comment', function (Blueprint $table) {
            $table->dropForeign('blog_comment_parent_id_foreign');
            $table->dropForeign('blog_comment_blog_id_foreign');
            $table->dropForeign('blog_comment_user_id_foreign');
        });

        Schema::table('blog', function (Blueprint $table) {
            $table->dropForeign('blog_uploadedby_foreign');
            $table->dropForeign('blog_category_foreign');
        });

        Schema::dropIfExists('users');

        Schema::dropIfExists('personal_access_tokens');

        Schema::dropIfExists('password_resets');

        Schema::dropIfExists('oauth_refresh_tokens');

        Schema::dropIfExists('oauth_personal_access_clients');

        Schema::dropIfExists('oauth_clients');

        Schema::dropIfExists('oauth_auth_codes');

        Schema::dropIfExists('oauth_access_tokens');

        Schema::dropIfExists('failed_jobs');

        Schema::dropIfExists('blog_comment_like');

        Schema::dropIfExists('blog_comment');

        Schema::dropIfExists('blog_category');

        Schema::dropIfExists('blog');
    }
};
