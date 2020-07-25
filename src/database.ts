import { connect } from 'mongoose';

export async function startConnection() {
  await connect('mongodb://localhost/photo-galery-db', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log('Database is conected');
}
