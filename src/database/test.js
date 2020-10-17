const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
  //inserir dados na tabela
  await saveOrphanage(db, {
    lat: "-27.2264143",
    lng: "-49.6544913",
    name: "Local de Guerra",
    about: "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
    whatsapp: "passa",
    images: [
      "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

      "https://images.unsplash.com/photo-1592840331052-16e15c2c6f95?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),

    instructions: "Venha se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 8h até 18h",
    open_on_weekends: "1"
  })
  //consultar dados na tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  //consultar somente 1 orfanato pelo id 1
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "5"')
  console.log(orphanage)
  
  /*/deletar dado da tabela
  console.log(await db.run('DELETE FROM orphanages WHERE id = "6"'))
  console.log(await db.run('DELETE FROM orphanages WHERE id = "7"'))
  console.log(await db.run('DELETE FROM orphanages WHERE id = "8"'))
/*/
})

 