// == Import npm
import React from 'react';

// == Import
import './rules.scss';

// == Component
const Rules = () => (
  <section className="rules-container">
    <p>
      Bienvenue sur <span>Pierre Feuille Fabigeon Fabiosaure Ciseaux</span> ou
      <span> P3FC </span>pour faire court,
      la version préférée des Fabiocultistes du Pierre Feuille Ciseaux.
    </p>
    <p>
      Le jeu se joue comme un Pierre Feuille Ciseaux classique,
      sauf qu'il y a cinq choix possibles qui s'articulent de cette façon:
    </p>
    <ul>
      <li>
        - <span className="won">Pierre</span>: écrase le <span className="lost">Fabiosaure</span> et les <span className="lost">Ciseaux</span>.
      </li>
      <li>
        - <span className="won">Feuille</span>: recouvre la <span className="lost">Pierre</span> et bloque la vue du <span className="lost">Fabigeon</span>.
      </li>
      <li>
        - <span className="won">Fabigeon</span>: défèque sur les <span className="lost">Ciseaux</span> et la <span className="lost">Pierre</span>.
      </li>
      <li>
        - <span className="won">Fabiosaure</span>: mange le <span className="lost">Fabigeon</span> (le pauvre) et marche sur la <span className="lost">Feuille</span>.
      </li>
      <li>
        - <span className="won">Ciseaux</span>: coupe la <span className="lost">Feuille</span> et le <span className="lost">Fabiosaure</span>.
      </li>
    </ul>
  </section>
);

// == Export
export default Rules;
