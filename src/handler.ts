export async function handler(event: {Record: any[]}, context: any, callback: any){
  console.log('Evento Recibido');
  console.log(JSON.stringify(event));
  callback();
}
