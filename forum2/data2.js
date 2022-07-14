var defaultThreads2 = [
    {
        id: 1,
        title: "Teknik fotografi",
        author: "Aaron",
        date: Date.now(),
        content: "Thread contentdasfasdfa dsafasdfa asdefasdfa asdfasdf asdfa fasdfa sdfa asdf asdf Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo lectus, fringilla et commodo sed, ultrices sit amet elit. Donec egestas sem consectetur dapibus viverra. Sed pulvinar diam tincidunt, pretium nisl nec, egestas enim. Vestibulum dapibus metus et velit fringilla, eget suscipit ex sagittis. Etiam ut semper mi. Sed ullamcorper lacinia justo, scelerisque porttitor orci bibendum sit amet. Fusce vel fringilla ante. Praesent odio neque, congue non molestie ut, molestie et quam. Nam molestie nulla ac risus varius feugiat. Integer nec placerat mauris ",
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
        title: "menggunakan adobe photoshop",
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

var threads2 = defaultThreads2
if (localStorage && localStorage.getItem('threads2')) {
    threads2 = JSON.parse(localStorage.getItem('threads2'));
} else {
    threads2 = defaultThreads2;
    localStorage.setItem('threads2', JSON.stringify(defaultThreads2));
}