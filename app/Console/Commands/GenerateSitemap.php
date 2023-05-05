<?php
use App\Models\Blog;
use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class GenerateSitemap extends Command
{
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap';

    public function handle()
    {
        $sitemap = Sitemap::create();

        // Fetch dynamic blog URLs and add them to the sitemap
        $blogs = Blog::all();
        foreach ($blogs as $blog) {
            $url = Url::create($blog->getUrl())->setLastModificationDate($blog->updated_at);
            $sitemap->add($url);
        }

        // Add other static URLs to the sitemap
        $sitemap->add(Url::create('/about-us'));
        $sitemap->add(Url::create('/contact-us'));
        $sitemap->add(Url::create('/advertise'));

        // Generate the sitemap file
        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap generated successfully.');
    }
}
