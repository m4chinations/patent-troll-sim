function InnocentCompany(name, money, patents) {
    this.name = name;
    this.money = money;
    this.patents = patents;
}

function Patent(name, worth) {
    this.name = name;
    this.worth = worth;
}

function Troll(name, patents) {
    this.name = name;
    this.patents = patents;
}

Troll.prototype.troll = function (company, patent, amount) {
    if (company.money < amount) { //if the company is being asked for more money than they have
        company.goBankrupt();
        return 'killed';
    }

};

Troll.prototype.sue = function (company, patent, amount) {
    if (company.money < amount) { //if the company is being asked for more money than they have
        this.patents.concat(company.patents); //take patents
        company.goBankrupt();
        return 'killed';
    }
};


var trollCompanyNames = [
    ["Eclipse", "Graph", "Occult", "Top", "Stage", "Music", "Winner", 
      "Innovative", "Determined", "Personal", "Knowledge", "Research", 
      "Interesting", "My", "Synergy", "Enthusiastic", "Software", "RPW", "AIX"],
    ["Group", "Research", "Innovations", "Collectors", "Solutions", 
      "People", "Entities", "Technologies", "Products", "Ideas", 
      "Things", "Rights", "Winners", "Synergy", "Software", "Collective", "Looks"],
    ["LLC", "Inc."]
  ];
function randomTrollName() {
  return trollCompanyNames[0][Math.floor(Math.random() * trollCompanyNames[0].length)] + " " + 
         trollCompanyNames[1][Math.floor(Math.random() * trollCompanyNames[1].length)] + " " +
         (Math.random() > 0.5 ? trollCompanyNames[2][Math.floor(Math.random() * trollCompanyNames[2].length)] : "");
}





$(document).ready(function() {



});
