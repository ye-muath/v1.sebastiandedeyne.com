<?php

use Illuminate\Support\HtmlString;
use League\CommonMark\CommonMarkConverter;
use MatthiasMullie\Minify\CSS;

function css(string $path): HtmlString
{
    $minifier = new CSS(
        resource_path("css/{$path}")
    );

    return new HtmlString($minifier->minify());
}

function markdown(string $html): HtmlString
{
    return new HtmlString(
        app(CommonMarkConverter::class)->convertToHtml($html)
    );
}