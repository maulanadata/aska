var defaultThreads4 = [
    {
        id: 1,
        title: "Apakah games valoran akan menjadi game populer",
        author: "Aaron",
        date: Date.now(),
        content: "Thread contentdasfasdfa dsafasdfa asdefasdfa asdfasdf asdfa fasdfa sdfa asdf asdf  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam leo lectus, fringilla et commodo sed, ultrices sit amet elit. Donec egestas sem consectetur dapibus viverra. Sed pulvinar diam tincidunt, pretium nisl nec, egestas enim. Vestibulum dapibus metus et velit fringilla, eget suscipit ex sagittis. Etiam ut semper mi. Sed ullamcorper lacinia justo, scelerisque porttitor orci bibendum sit amet. Fusce vel fringilla ante. Praesent odio neque, congue non molestie ut, molestie et quam. Nam molestie nulla ac risus varius feugiat. Integer nec placerat mauris",
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
        title: "game coc yang lama ditinggalkan",
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

var threads4 = defaultThreads4
if (localStorage && localStorage.getItem('threads4')) {
    threads4 = JSON.parse(localStorage.getItem('threads4'));
} else {
    threads4 = defaultThreads4;
    localStorage.setItem('threads4', JSON.stringify(defaultThreads4));
}