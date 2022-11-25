import userModel from '../api/users/userModel';
import genresModel from '../api/genres/genresModel'
import users from './users';
import dotenv from 'dotenv';
import genres from './genres';

dotenv.config();

// deletes all user documents in collection and inserts test data



async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await userModel.collection.insertMany(users);
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres() {
    console.log('load genres');
    try {
      await genresModel.deleteMany();
      await genresModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genres: ${err}`);
    }
  }


if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}