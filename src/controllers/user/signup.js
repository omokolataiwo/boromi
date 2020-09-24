import { User } from '../../models';

export const signup = (req, res) => {
  return User
    .create({ username: 'Taiwo', password: 'Kolawole' })
    .then(user => res.status(201).json({ user }))
    .then(error => res.status(201).json({ error }));
}
