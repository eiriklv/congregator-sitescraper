exports = module.exports = [
    {
        active: false,
        origin: 'site',
        name: 'Gamer.no',
        url: 'http://www.gamer.no',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h2 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'p',
                                    delimiter: '\n'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.com/1.png',
                            items: [
                                {
                                    selector: 'figure a img',
                                    attribute: 'src'
                                },
                                {
                                    selector: 'figure a div.delay-image-load',
                                    attribute: 'data-src-normal'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'IGN Norge',
        url: 'http://no.ign.com',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'div.headlines',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h3 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.com/image.png',
                            items: [
                                {
                                    selector: 'div.img-thumb a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Pressfire.no',
        url: 'http://www.pressfire.no/',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '#top-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.top-article-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.image-article-meta a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                },
                {
                    selector: 'div.large-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.large-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.large-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.large-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.image-article-meta a img',
                                    attribute: 'src'
                                },
                                {
                                    selector: 'div.article-image-container a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                },
                {
                    selector: 'div.small-article',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.article-meta h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.article-meta h2 a'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://www.pressfire.no/gfx/pressfire-logo.png',
                            items: [
                                {
                                    selector: 'div.article-image-container a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Spillfreak.no',
        url: 'http://www.spillfreak.no',
        linkref: 'url',
        category: ['technology', 'gaming'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'div.blog-item',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.archive-text h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'div.archive-text h2 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'div.archive-text h2 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'div.archive-text p',
                                    delimiter: ' ... Read More'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.comm/1.png',
                            items: [
                                {
                                    selector: 'div.item-image a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'Tv2 Nettavisen',
        url: 'http://www.nettavisen.no/',
        linkref: 'url',
        category: ['news'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'alt'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.comm/1.png',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'src'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: false,
        origin: 'site',
        name: 'sol.no',
        url: 'http://www.sol.no/',
        linkref: 'url',
        category: ['news'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: '.article-content',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h4 a',
                                    attribute: 'href'
                                },{
                                    selector: 'h3 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h2 a',
                                    attribute: 'href'
                                },
                                {
                                    selector: 'h1 a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'h5 a'
                                },
                                {
                                    selector: 'h4 a'
                                },
                                {
                                    selector: 'h3 a'
                                },
                                {
                                    selector: 'h2 a'
                                },
                                {
                                    selector: 'h1 a'
                                }
                            ]
                        },
                        {
                            name: 'description',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'alt'
                                }
                            ]
                        },
                        {
                            name: 'image',
                            type: 'url',
                            fallback: 'http://someimageurl.com/1.png',
                            items: [
                                {
                                    selector: 'span.df-img-container-inner a img',
                                    attribute: 'data-original'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    {
        active: true,
        origin: 'site',
        name: 'Hacker News',
        url: 'http://news.ycombinator.com',
        linkref: 'url',
        category: ['technology', 'hackernews'],
        format: 'desktop',
        body: true,
        template: {
            containers: [
                {
                    selector: 'tr td.title',
                    elements: [
                        {
                            name: 'guid',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'url',
                            type: 'url',
                            items: [
                                {
                                    selector: 'a',
                                    attribute: 'href'
                                }
                            ]
                        },
                        {
                            name: 'title',
                            required: true,
                            items: [
                                {
                                    selector: 'a'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
];