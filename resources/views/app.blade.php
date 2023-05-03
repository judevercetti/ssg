<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <!-- Primary Meta Tags -->
    <title>@isset($title){{$title}}@else South Sudan Global @endisset - SSG</title>
    <meta name="title" content="@isset($title){{$title}}@else South Sudan Global @endisset - SSG">
    <meta name="description" content="@isset($description){{$description}}@else It is in the best interest of our professional news anchors to feed our esteemed viewers and the general public with impartial, multi-dimensional news, entertainment or in-depth analyses as possible. @endisset">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="{{url()->current()}}">
    <meta property="og:title" content="@isset($title){{$title}}@else South Sudan Global @endisset - SSG">
    <meta property="og:description" content="@isset($description){{$description}}@else It is in the best interest of our professional news anchors to feed our esteemed viewers and the general public with impartial, multi-dimensional news, entertainment or in-depth analyses as possible. @endisset">
    <meta property="og:image" content="@isset($image){{$image}}@else {{url('/images/logo.png')}} @endisset">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="{{url()->current()}}">
    <meta property="twitter:title" content="@isset($title){{$title}}@else South Sudan Global @endisset - SSG">
    <meta property="twitter:description" content="@isset($description){{$description}}@else It is in the best interest of our professional news anchors to feed our esteemed viewers and the general public with impartial,multi-dimensional news, entertainment or in-depth analyses as possible. @endisset">
    <meta property="twitter:image" content="@isset($image){{$image}}@else {{url('/images/logo.png')}} @endisset">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600;700&amp;display=swap" rel="stylesheet">
    
    @vite('resources/js/app.js')
    {{vite_assets()}}
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>