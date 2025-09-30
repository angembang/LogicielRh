import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
      employeeList = [
  { "nom": "Alice Dupont", "poste": "Développeuse Front-end", "departement": "Informatique" },
  { "nom": "Bruno Martin", "poste": "Chef de Projet", "departement": "Gestion" },
  { "nom": "Camille Leroy", "poste": "Analyste Business", "departement": "Marketing" },
  { "nom": "David Moreau", "poste": "Technicien Réseau", "departement": "Informatique" },
  { "nom": "Élodie Bernard", "poste": "Chargée de Communication", "departement": "Communication" },
  { "nom": "François Petit", "poste": "Comptable", "departement": "Finance" },
  { "nom": "Gaëlle Simon", "poste": "Responsable RH", "departement": "Ressources Humaines" },
  { "nom": "Hugo Richard", "poste": "Développeur Back-end", "departement": "Informatique" },
  { "nom": "Isabelle Dubois", "poste": "Assistante Administrative", "departement": "Administration" },
  { "nom": "Jérôme Faure", "poste": "Ingénieur Qualité", "departement": "Production" },
  { "nom": "Karine Robert", "poste": "Chargée de Recrutement", "departement": "Ressources Humaines" },
  { "nom": "Laurent Fontaine", "poste": "Consultant", "departement": "Conseil" },
  { "nom": "Marie Clément", "poste": "Responsable Marketing", "departement": "Marketing" },
  { "nom": "Nicolas Roux", "poste": "Technicien Support", "departement": "Informatique" },
  { "nom": "Océane Lemoine", "poste": "Graphiste", "departement": "Création" }
]

employees : Employee[] = [
  {
    id: 1,
    name: 'Alice Dupont',
    post: 'Développeuse',
    actif: true
  },

  {
    id: 2,
    name: 'Bruno Martin',
    post: 'Chef de Projet',
    actif: true
  },

  {
    id: 3,
    name: 'Camille Leroy',
    post: 'Analyste Business',
    actif: false
  },

  {
    id: 4,
    name: 'David Moreau',
    post: 'Technicien Réseau',
    actif: false
  },

  {
    id: 5,
    name: 'Élodie Bernard',
    post: 'Chargée de Communication',
    actif: true
  },

  {
    id: 6,
    name: 'François Petit',
    post: 'Comptable',
    actif: true
  },

  {
    id: 7,
    name: 'Gaëlle Simon',
    post: 'Responsable RH',
    actif: true
  },

  {
    id: 8,
    name: 'Hugo Richard',
    post: 'éveloppeur Back-end',
    actif: true
  },

  {
    id: 9,
    name: 'Isabelle Dubois',
    post: 'Assistante Administrative',
    actif: true
  },

  {
    id: 10,
    name: 'Jérôme Faure',
    post: 'Ingénieur Qualité',
    actif: true
  },

  {
    id: 11,
    name: 'Karine Robert',
    post: 'Chargée de Recrutement',
    actif: true
  },

  {
    id: 12,
    name: 'Laurent Fontaine',
    post: 'Consultant',
    actif: true
  },
];

toggleStatus(employee: Employee) {
  employee.actif = !employee.actif
}

addEmployee(newEmployee: Employee) {
  const newId = this.employees.length > 0
    ? Math.max(...this.employees.map(e => e.id)) + 1
    : 1;

  this.employees.push({ ...newEmployee, id: newId });
}


}
