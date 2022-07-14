var defaultThreads1 = [
    {
        id: 1,
        title: "Cara internetan menggunakan starlink",
        author: "Aaron",
        date: Date.now(),
        content: "cara internetan menggunakan starlink adalah cara yang terbaru Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo lectus, fringilla et commodo sed, ultrices sit amet elit. Donec egestas sem consectetur dapibus viverra. Sed pulvinar diam tincidunt, pretium nisl nec, egestas enim. Vestibulum dapibus metus et velit fringilla, eget suscipit ex sagittis. Etiam ut semper mi. Sed ullamcorper lacinia justo, scelerisque porttitor orci bibendum sit amet. Fusce vel fringilla ante. Praesent odio neque, congue non molestie ut, molestie et quam. Nam molestie nulla ac risus varius feugiat. Integer nec placerat mauris ",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey theredadadfad"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    },
    {
        id: 2,
        title: "Cara internetan menggunakan internet satelit",
        author: "Aaron",
        date: Date.now(),
        content: "Thread content 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo lectus, fringilla et commodo sed, ultrices sit amet elit. Donec egestas sem consectetur dapibus viverra. Sed pulvinar diam tincidunt, pretium nisl nec, egestas enim. Vestibulum dapibus metus et velit fringilla, eget suscipit ex sagittis. Etiam ut semper mi. Sed ullamcorper lacinia justo, scelerisque porttitor orci bibendum sit amet. Fusce vel fringilla ante. Praesent odio neque, congue non molestie ut, molestie et quam. Nam molestie nulla ac risus varius feugiat. Integer nec placerat mauris",
        comments: [
            {
                author: "Jack",
                date: Date.now(),
                content: "Hey there"
            },
            {
                author: "Arthur",
                date: Date.now(),
                content: "Hey to you too"
            }
        ]
    }
]

var threads1 = defaultThreads1
if (localStorage && localStorage.getItem('threads1')) {
    threads1 = JSON.parse(localStorage.getItem('threads1'));
} else {
    threads1 = defaultThreads1;
    localStorage.setItem('threads1', JSON.stringify(defaultThreads1));
}