const calculateSpeed = function(a) {
    return new Promise(function(b) {
        const c = new Image();
        let startTime, endTime;
        startTime = Date.now();
        c.src = a + "/" + Math.random();
        c.onerror = function() {
            endTime = Date.now();
            const d = endTime - startTime;
            b({
                url: a,
                ping: d
            })
        }
    })
};
SpeedTest = function(b, a) {
    if (a) {
        Promise.all(b.map(calculateSpeed)).then(function(c) {
            a(c)
        })
    } else {
        return Promise.all(b.map(calculateSpeed))
    }
};