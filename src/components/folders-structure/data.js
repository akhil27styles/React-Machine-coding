 const data={
    name:'root',
    isFolder:true,
    items:[
        {
        name:'public',
        isFolder:true,
        items:[
            {
                name:'public nested 1',
                isFolder:true,
                items:[
                    {
                        name:'index.html',
                        isFolder:false,
                    },
                    {
                        name:'script.js',
                        isFolder:false,
                    }
                ]
            }
        ]
        },

        {
            name:'src',
            isFolder:true,
            items:[
                {
                    name:'components',
                    isFolder:true,
                    items:[
                        {
                            name:'App.jsx',
                            isFolder:false,
                        },
                        {
                            name:'Search.jsx',
                            isFolder:false,
                        }
                    ]
                }
            ]
            },
            {
                name:'package.json',
                isFolder:false
            }

    ]
}

export default data;