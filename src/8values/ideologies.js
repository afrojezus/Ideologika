// 8values

const ideologies = [
    {
        "name": "Anarcho-Communism",
        "stats": {
            "econ": 100,
            "dipl": 50,
            "govt": 100,
            "scty": 90
        },
        'bg': 'http://danny.oz.au/politics/anarchism/cnt.gif'
    },
    {
        "name": "Libertarian Communism",
        "stats": {
            "econ": 100,
            "dipl": 70,
            "govt": 80,
            "scty": 80
        },
        'bg': 'http://danny.oz.au/politics/anarchism/cnt.gif'
    },
    {
        "name": "Trotskyism",
        "stats": {
            "econ": 100,
            "dipl": 100,
            "govt": 60,
            "scty": 80
        },
        'bg': 'https://i.ytimg.com/vi/CKvi39-bBhY/maxresdefault.jpg'
    },
    {
        "name": "Marxism",
        "stats": {
            "econ": 100,
            "dipl": 70,
            "govt": 40,
            "scty": 80
        },
        'bg': 'https://versobooks-prod.s3.amazonaws.com/blog_posts/000003/278/blobid1497619717572-e95381e43e727ca9b1547847275befdf-.jpg'
    },
    {
        "name": "De Leonism",
        "stats": {
            "econ": 100,
            "dipl": 30,
            "govt": 30,
            "scty": 80
        },
        'bg': 'http://farm9.staticflickr.com/8390/8600919386_1c536eeb35.jpg'
    },
    {
        "name": "Leninism",
        "stats": {
            "econ": 100,
            "dipl": 40,
            "govt": 20,
            "scty": 70
        },
        'bg': 'http://dighist.fas.harvard.edu/courses/2015/HUM54/files/original/e2fd9f7db3919051afc6486d44277ba5.jpg'
    },
    {
        "name": "Stalinism/Maoism",
        "stats": {
            "econ": 100,
            "dipl": 20,
            "govt": 0,
            "scty": 60
        },
        'bg': 'http://prod-cdn-history-co-uk.s3.amazonaws.com/s3fs-public/josef_stalin_0.jpg?vfpJwgl7Z.hYmif3baeVAJy1j_PVHw4A'
    },
    {
        "name": "Religious Communism",
        "stats": {
            "econ": 100,
            "dipl": 50,
            "govt": 30,
            "scty": 30
        },
        'bg': 'http://media.beliefnet.com/~/media/photos-with-attribution/faith/jesuschrist.jpg'
    },
    {
        "name": "State Socialism",
        "stats": {
            "econ": 80,
            "dipl": 30,
            "govt": 30,
            "scty": 70
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Yugoslav_Partisans_flag_%281942-1945%29.svg'
    },
    {
        "name": "Theocratic Socialism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 30,
            "scty": 20
        },
        'bg': 'http://media.beliefnet.com/~/media/photos-with-attribution/faith/jesuschrist.jpg'
    },
    {
        "name": "Religious Socialism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 70,
            "scty": 20
        },
        'bg': 'http://media.beliefnet.com/~/media/photos-with-attribution/faith/jesuschrist.jpg'
    },
    {
        "name": "Democratic Socialism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 50,
            "scty": 80
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_flag.svg/250px-Red_flag.svg.png'
    },
    {
        "name": "Revolutionary Socialism",
        "stats": {
            "econ": 80,
            "dipl": 20,
            "govt": 50,
            "scty": 70
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_flag.svg/250px-Red_flag.svg.png'
    },
    {
        "name": "Libertarian Socialism",
        "stats": {
            "econ": 80,
            "dipl": 80,
            "govt": 80,
            "scty": 80
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Red_flag.svg/250px-Red_flag.svg.png'
    },
    {
        "name": "Anarcho-Syndicalism",
        "stats": {
            "econ": 80,
            "dipl": 50,
            "govt": 100,
            "scty": 80
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Anarchist_flag.svg/1200px-Anarchist_flag.svg.png'
    },
    {
        "name": "Left-Wing Populism",
        "stats": {
            "econ": 60,
            "dipl": 40,
            "govt": 30,
            "scty": 70
        },
        'bg': 'https://62e528761d0685343e1c-f3d1b99a743ffa4142d9d7f1978d9686.ssl.cf2.rackcdn.com/files/114814/width754/image-20160311-11285-7tdfo6.jpg'
    },
    {
        "name": "Theocratic Distributism",
        "stats": {
            "econ": 60,
            "dipl": 40,
            "govt": 30,
            "scty": 20
        },
        'bg': 'http://media.beliefnet.com/~/media/photos-with-attribution/faith/jesuschrist.jpg'
    },
    {
        "name": "Distributism",
        "stats": {
            "econ": 60,
            "dipl": 50,
            "govt": 50,
            "scty": 20
        },
        'bg': 'http://media.beliefnet.com/~/media/photos-with-attribution/faith/jesuschrist.jpg'
    },
    {
        "name": "Social Liberalism",
        "stats": {
            "econ": 60,
            "dipl": 60,
            "govt": 60,
            "scty": 80
        },
        "bg": 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/U.S._Democratic_Party_logo_%28transparent%29.svg/1200px-U.S._Democratic_Party_logo_%28transparent%29.svg.png'
    },
    {
        "name": "Christian Democracy",
        "stats": {
            "econ": 60,
            "dipl": 60,
            "govt": 40,
            "scty": 30
        },
        "bg": 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png'
    },
    {
        "name": "Social Democracy",
        "stats": {
            "econ": 60,
            "dipl": 70,
            "govt": 40,
            "scty": 80
        },
        "bg": 'https://isobelblackthorn.files.wordpress.com/2014/08/social_democracy_wallpaper__1920x1080_by_detectivep-d4hnmuy.jpg'
    },
    {
        "name": "Progressivism",
        "stats": {
            "econ": 60,
            "dipl": 80,
            "govt": 60,
            "scty": 100
        },
        "bg": 'https://fiu-assets-2-syitaetz61hl2sa.stackpathdns.com/static/use-media-items/17/16058/full-1424x512/56702c1c/tumblr_logotype_white_blue_512.png?resolution=0'
    },
    {
        "name": "Anarcho-Mutualism",
        "stats": {
            "econ": 60,
            "dipl": 50,
            "govt": 100,
            "scty": 70
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/3/38/Anarcho-mutualism_flag.jpg'
    },
    {
        "name": "National Totalitarianism",
        "stats": {
            "econ": 50,
            "dipl": 20,
            "govt": 0,
            "scty": 50
        }
    },
    {
        "name": "Global Totalitarianism",
        "stats": {
            "econ": 50,
            "dipl": 80,
            "govt": 0,
            "scty": 50
        }
    },
    {
        "name": "Technocracy",
        "stats": {
            "econ": 60,
            "dipl": 60,
            "govt": 20,
            "scty": 70
        },
        'bg': 'https://www.blog.google/images/download/DvujqGIr46dew-phGARpDy8bMSQ=/1095/original/Google_Logo.png'
    },
    {
        "name": "Centrist",
        "stats": {
            "econ": 50,
            "dipl": 50,
            "govt": 50,
            "scty": 50
        },
        "bg": ''
    },
    {
        "name": "Liberalism",
        "stats": {
            "econ": 50,
            "dipl": 60,
            "govt": 60,
            "scty": 60
        },
        "bg": 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png'
    },
    {
        "name": "Religious Anarchism",
        "stats": {
            "econ": 50,
            "dipl": 50,
            "govt": 0,
            "scty": 20
        },
        'bg': 'http://68.media.tumblr.com/428b44fc4cdd096dcb97eb5c4fc4863a/tumblr_inline_o4ex56SlGA1r55dp8_1280.png'
    },
    {
        "name": "Right-Wing Populism",
        "stats": {
            "econ": 40,
            "dipl": 30,
            "govt": 30,
            "scty": 30
        },
        'bg': 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161107120239-01-trump-parry-super-169.jpg'
    },
    {
        "name": "Moderate Conservatism",
        "stats": {
            "econ": 40,
            "dipl": 40,
            "govt": 50,
            "scty": 30
        },
        'bg': 'https://www.adl.org/sites/default/files/styles/max_650x650/public/images/combating-hate/hate-on-display/c/confederate-flag-1.jpg?itok=fooy_XtF'
    },
    {
        "name": "Reactionary",
        "stats": {
            "econ": 40,
            "dipl": 40,
            "govt": 40,
            "scty": 10
        },
        'bg': 'http://i0.kym-cdn.com/entries/icons/original/000/022/139/CFkPNBTgNNABqac-1600x900-noPad.jpg'
    },
    {
        "name": "Social Libertarianism",
        "stats": {
            "econ": 60,
            "dipl": 70,
            "govt": 80,
            "scty": 70
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/ICS_Quebec.svg/1200px-ICS_Quebec.svg.png'
    },
    {
        "name": "Libertarianism",
        "stats": {
            "econ": 40,
            "dipl": 60,
            "govt": 80,
            "scty": 60
        },
        'bg': 'http://i0.kym-cdn.com/photos/images/original/001/185/731/ed3.png'
    },
    {
        "name": "Anarcho-Egoism",
        "stats": {
            "econ": 40,
            "dipl": 50,
            "govt": 100,
            "scty": 50
        },
        'bg': 'http://calpress.org/wp-content/uploads/2013/10/Cliff-Harpers-Max-Stirner.gif'
    },
    {
        "name": "Nazism",
        "stats": {
            "econ": 40,
            "dipl": 0,
            "govt": 0,
            "scty": 5
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/War_Ensign_of_Germany_%281935-1938%29.svg/800px-War_Ensign_of_Germany_%281935-1938%29.svg.png'
    },
    {
        "name": "Autocracy",
        "stats": {
            "econ": 50,
            "dipl": 20,
            "govt": 20,
            "scty": 50
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/2000px-Flag_of_North_Korea.svg.png'
    },
    {
        "name": "Fascism",
        "stats": {
            "econ": 40,
            "dipl": 20,
            "govt": 20,
            "scty": 20
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Italian_Fascism.svg'
    },
    {
        "name": "Capitalist Fascism",
        "stats": {
            "econ": 20,
            "dipl": 20,
            "govt": 20,
            "scty": 20
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_the_British_Union_of_Fascists.svg/1200px-Flag_of_the_British_Union_of_Fascists.svg.png'
    },
    {
        "name": "Conservatism",
        "stats": {
            "econ": 30,
            "dipl": 40,
            "govt": 40,
            "scty": 20
        },
        'bg': 'https://www.adl.org/sites/default/files/styles/max_650x650/public/images/combating-hate/hate-on-display/c/confederate-flag-1.jpg?itok=fooy_XtF'
    },
    {
        "name": "Neo-Liberalism",
        "stats": {
            "econ": 30,
            "dipl": 30,
            "govt": 50,
            "scty": 60
        },
        'bg': 'http://scd.france24.com/en/files/imagecache/france24_ct_api_bigger_169/article/image/20170323_macron.jpg'
    },
    {
        "name": "Classical Liberalism",
        "stats": {
            "econ": 30,
            "dipl": 60,
            "govt": 60,
            "scty": 80
        },
        'bg': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png'
    },
    {
        "name": "Authoritarian Capitalism",
        "stats": {
            "econ": 20,
            "dipl": 30,
            "govt": 20,
            "scty": 40
        },
        'bg': 'http://theriskyshift.com/wp-content/uploads/2012/01/enjoy-capitalism-130.jpg'
    },
    {
        "name": "State Capitalism",
        "stats": {
            "econ": 20,
            "dipl": 50,
            "govt": 30,
            "scty": 50
        },
        'bg': 'http://flagpedia.net/data/flags/normal/cn.png' 
    },
    {
        "name": "Neo-Conservatism",
        "stats": {
            "econ": 20,
            "dipl": 20,
            "govt": 40,
            "scty": 20
        },
        'bg': 'http://www.factslides.com/imgs/911-planes.jpg'
    },
    {
        "name": "Fundamentalism",
        "stats": {
            "econ": 20,
            "dipl": 30,
            "govt": 30,
            "scty": 5
        },
        'bg': 'http://media.beliefnet.com/~/media/photos-with-attribution/faith/jesuschrist.jpg'
    },
    {
        "name": "Libertarian Capitalism",
        "stats": {
            "econ": 20,
            "dipl": 50,
            "govt": 80,
            "scty": 60
        },
        'bg': 'http://i0.kym-cdn.com/photos/images/original/001/185/731/ed3.png'
    },
    {
        "name": "Market Anarchism",
        "stats": {
            "econ": 20,
            "dipl": 50,
            "govt": 100,
            "scty": 50
        },
        'bg': 'https://transpoliticaorg.files.wordpress.com/2015/06/market-anarchy.png'
    },
    {
        "name": "Totalitarian Capitalism",
        "stats": {
            "econ": 0,
            "dipl": 30,
            "govt": 0,
            "scty": 50
        },
        'bg': 'http://theriskyshift.com/wp-content/uploads/2012/01/enjoy-capitalism-130.jpg'
    },
    {
        "name": "Ultra-Capitalism",
        "stats": {
            "econ": 0,
            "dipl": 40,
            "govt": 50,
            "scty": 50
        },
        'bg': 'http://theriskyshift.com/wp-content/uploads/2012/01/enjoy-capitalism-130.jpg'
    },
    {
        "name": "Anarcho-Capitalism",
        "stats": {
            "econ": 0,
            "dipl": 50,
            "govt": 100,
            "scty": 50
        },
        'bg': 'https://beinglibertarian.com/wp-content/uploads/2016/10/Flag_of_Anarcho-capitalism.svg_.png'
    }
]

export default ideologies;