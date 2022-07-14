var defaultThreads3 = [
    {
        id: 1,
        title: "Make up cantik para youtuber belia",
        author: "Aaron",
        date: Date.now(),
        content: "Thread contentdasfasdfa dsafasdfa aLorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo lectus, fringilla et commodo sed, ultrices sit amet elit. Donec egestas sem consectetur dapibus viverra. Sed pulvinar diam tincidunt, pretium nisl nec, egestas enim. Vestibulum dapibus metus et velit fringilla, eget suscipit ex sagittis. Etiam ut semper mi. Sed ullamcorper lacinia justo, scelerisque porttitor orci bibendum sit amet. Fusce vel fringilla ante. Praesent odio neque, congue non molestie ut, molestie et quam. Nam molestie nulla ac risus varius feugiat. Integer nec placerat maurissdefasdfa asdfasdf asdfa fasdfa sdfa asdf asdf ",
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
        title: "Muda dan cantik secara instan kayak mie",
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

var threads3 = defaultThreads3
if (localStorage && localStorage.getItem('threads3')) {
    threads3 = JSON.parse(localStorage.getItem('threads3'));
} else {
    threads3 = defaultThreads3;
    localStorage.setItem('threads3', JSON.stringify(defaultThreads3));
}