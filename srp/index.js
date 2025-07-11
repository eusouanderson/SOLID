import { UserRepository } from "./UserRepository.js";
import { UserService } from "./UserService.js";

const repo = new UserRepository();
const service = new UserService(repo);

service.addUser("Anderson");
service.addUser("Maria");
service.addUser("Anderson");
