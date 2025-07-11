export class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  addUser(name) {
    const user = this.userRepository.getAllUsers();

    if (user.includes(name)) {
      console.log(`X User "${name}" already exists.`);
      return;
    }

    this.userRepository.saveUser(name);
    console.log(`OK User "${name} added succesfully.`);
  }
}
