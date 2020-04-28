// const express = require("express")
// const knex = require("knex")
const db = require("../data/dbConfig");

    function find(){
        return db("schemes");
}

    function findById(id){
        if (!id) {
            return null;
        }
        return db("schemes").where({ id }).first();
}

function findSteps(id) {
    return db.select("steps.id as step_id ", "schemes.scheme_name",
        "steps.step_number", "steps.instructions")
    .from("schemes")
    .join("steps", "schemes.id", "steps.scheme_id");
    where({ id });
       

}

    function add(scheme){

}

    function update(changes, id){

}
   
    function remove(id){

}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}


