import db from '../../app/models/modrels.js';

async function up({context: QueryInterface}) {
  if(db.Visit) {
    await db.Visit.bulkCreate([
      
    ]);
  }else {
    await QueryInterface.bulkInsert('visits', [

    ]);
  }

}

async function down({context: QueryInterface}) {
  await QueryInterface.bulkDelete('visits');
}

export { up, down }
