const schedule = require('node-schedule');
const twit = require('./twitthis');

const time = new Date('2021-01-31T20:03:26.000+5:30');

//shedule work
// schedule.scheduleJob(time, ()=>{
//   console.log('job start running' )
// })

//time interval
twit();

// const twohrs = '0 */2 * * *'
// const twosec = '*/2 * * * * *'
// const twittime = schedule.scheduleJob('*/10 * * * * *', ()=>{
//   schedule.scheduleJob(twosec, ()=>{
//     console.log('df')
    
//     twittime.cancel()
//   })
  
//   console.log('wait')
// })