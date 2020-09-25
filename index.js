const express = require('express');

const app = express();
//app.use(logger);
app.use('/streams', require('./src/routes/streams/streamsRouter'));
app.use('/majors', require('./src/routes/majors/majorsRouter'));
app.use('/subjects', require('./src/routes/subjects/subjectsRouter'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`);
})