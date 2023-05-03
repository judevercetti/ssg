<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StaticController extends Controller
{
    public function about_us()
    {
        return Inertia::render('AboutUs')->withViewData([
            'title' => 'About Us',
            'description' => 'South Sudan Global (SSG) is an online news leader focusing on South Sudan, Africa & Beyond. We’re guided by the principle of integrity and impartiality. It is in the best interest of our professional news anchors to feed our esteemed viewers and the general public with impartial, multi-dimensional news or in-depth analyses as possible.',
        ]);
    }

    public function contact_us()
    {
        return Inertia::render('ContactUs')->withViewData([
            'title' => 'Contact Us',
            'description' => 'Have a news tip, feedback, or a press inquiry? Get in touch with our team at [News Site Name]. We welcome your input and are committed to delivering accurate and timely news. Contact us today to connect with our dedicated staff and contribute to our mission of keeping you informed.',
        ]);
    }

    public function terms_of_use()
    {
        return Inertia::render('TermsOfUse')->withViewData([
            'title' => 'Terms of Use',
            'description' => 'By accessing and using our website, you agree to abide by our Terms of Use. Our Terms outline the rules, rights, and responsibilities that govern your use of our services. Its essential to read and understand these terms to ensure a safe and satisfactory experience. Familiarize yourself with our Terms of Use to know what is expected of you and how we protect your rights.',
        ]);
    }

    public function privacy_policy()
    {
        return Inertia::render('PrivacyPolicy')->withViewData([
            'title' => 'Privacy Policy',
            'description' => 'Protecting your privacy is our top priority. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. We are committed to maintaining the confidentiality of your data and ensuring transparency in our practices. Read our Privacy Policy to understand how we handle your information and uphold your privacy rights.',
        ]);
    }
}