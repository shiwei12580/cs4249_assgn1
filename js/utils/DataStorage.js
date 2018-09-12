var DataStorage = (function () {
    var module = {};

    module.setItem = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    module.getItem = function (key) {
        return JSON.parse(localStorage.getItem(key));
    }

    module.removeItem = function (key) {
        localStorage.removeItem(key);
    }

    module.setPID = function(pid) {
        localStorage.setItem('pid', pid);
    }

    module.getPID = function() {
        var pid = localStorage.getItem('pid');
        if (!pid) {
            alert('participant id not set!');
            pid = prompt('Enter participant ID:').toString();
            this.setPID(pid);
        }
        return pid;
    }
    return module;
})();
