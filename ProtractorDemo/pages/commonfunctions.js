let commonfunction = function(){

    this.OpenUrl = function(url){

        browser.get(url);
    };
};

module.exports = new commonfunction();