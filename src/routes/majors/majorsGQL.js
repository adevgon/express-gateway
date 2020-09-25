const getMajors= ` query getMajors($code: String !){
  majors(where:
    {
      stream:{
        short_code:$code
      }
    }
  ){
    name
    code
  }
}`;

module.exports = {getMajors}