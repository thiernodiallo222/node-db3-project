
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
        .join("steps", "schemes.id", "steps.scheme_id")
        .where("schemes.id", id).orderBy("steps.id", "asc");
    
}

function add(scheme) {
   return db("schemes").insert(scheme);

}

function update(changes, id) {
    return db("schemes").where({ id }).update(changes);
}
   
    function remove(id){
        return db("schemes").where({ id }).del();
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}


