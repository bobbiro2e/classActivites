var orm = require("./config/orm.js");

// Console log all the party names.
orm.selectColumn("party_name", "parties");

// Console log all the client names.
orm.selectColumn("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.selectJoin("clients.client_name", "parties.party_name", "parties", "clients", "clients.id", "parties.client_id");