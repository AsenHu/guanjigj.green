var gitalk = new Gitalk({
    clientID: 'Ov23liaEf7biqowqFPGD',
    clientSecret: 'e08fa2162dde6e2ec054af0e2e8d4586ed617031',
    repo: 'guanjigj.green',
    owner: 'AsenHu',
    admin: ['AsenHu'],
    id: location.pathname.slice(-50),      // Ensure uniqueness and length less than 50
    distractionFreeMode: false  // Facebook-like distraction free mode
})