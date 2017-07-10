<?php

use Illuminate\Support\HtmlString;

function carbon()
{
    return new \Carbon\Carbon();
}

function markdown($markdown)
{
    return app(\League\CommonMark\CommonMarkConverter::class)->convertToHtml($markdown);
}

function svg($filename)
{
    $contents = @file_get_contents(
        base_path("resources/assets/svg/{$filename}.svg")
    );

    return new HtmlString($contents);
}
