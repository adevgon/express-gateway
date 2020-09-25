const getSubjects= ` query getSubjects($code: String !){
  subjects(where:
    {
      major:{
        code:$code
      }
    }
  ){
    name
    code
  }
}`;

module.exports = {getSubjects}