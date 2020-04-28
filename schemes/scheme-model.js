// const express = require("express")
// const knex = require("knex")
const db = require("../data/dbConfig");

    function find(){
        return db("schemes")
}

//     function findById(id){

// }

//     function findSteps(){

// }

//     function add(scheme){

// }

//     function update(changes, id){

// }
   
//     function remove(id){

// }

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}


