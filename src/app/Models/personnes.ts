export class Uers{
  // tslint:disable-next-line:max-line-length
  constructor(id: number, token: string, nonComplet: string, email: string, photo: string, password: string, statut: boolean,  adresse: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.statut = statut;
    this.adresse = adresse;
    this.token = token;
    this.nomComple =nonComplet;
  }
  id: number;
  token: string;
  nomComple: string
  email: string;
  password: string;
  statut: boolean;
  adresse: string;
}
