export const state = () => ({
  socials: [{
    id: 0,
    name: 'Sozialleben',
    situations: [{
      id: 0,
      title: 'Restaurantbesuche',
      text: 'Bestellungen Aufgeben im Restaurant'

    },
    {
      id: 1,
      title: 'Freundschaften',
      text: 'In Dialog rechtzeitig auf Fragen antworten/aktiv an Gesprächen teilnehmen; In Gruppe, allen Gesprächen folgen und gegebenenfalls auch daran teilhaben; Smalltalk '
    },
    {
      id: 2,
      title: 'Friseurbesuch',
      text: 'Mit dem Coiffeur oder der Coiffeuse interagieren'
    },
    {
      id: 3,
      title: 'Feste',
      text: 'An einem Fest auf unbekannte Leute zugehen und eine Unterhaltung starten '
    },
    {
      id: 4,
      title: 'Diskussionen',
      text: 'Diskussionen allgemein'
    },
    {
      id: 5,
      title: 'Allgemeines',
      text: 'Erkennen, dass mir jemand etwas andrehen möchte und dann ein klares "nein" sagen'
    }
    ]
  },
  {
    id: 1,
    name: 'Beruf',
    situations: [{
      id: 0,
      title: 'Stress',
      text: 'Stress allgemein'

    },
    {
      id: 1,
      title: 'Teamarbeit',
      text: 'Unklare Arbeitsverteilung; Unkonkrete Anweisungen'
    },
    {
      id: 2,
      title: 'Präsentationen',
      text: 'Vorsprechen/ Vor Menschen sprechen'
    },
    {
      id: 3,
      title: 'Sitzungen',
      text: 'Besprechungen, welche lange andauern; Aperos'
    }
    ]

  },
  {
    id: 2,
    name: 'Schule',
    situations: [{
      id: 0,
      title: 'Interaktion mit Mitschülern/Lehrern',
      text: 'Gruppenarbeiten; um Hilfe fragen'

    },
    {
      id: 1,
      title: 'Verständnisprobleme',
      text: 'Aufgaben die aufgetragen werden, missverstehen'
    }
    ]

  },
  {
    id: 3,
    name: 'Verkehr',
    situations: [{
      id: 0,
      title: 'Angesprochen werden',
      text: 'Im ÖV wegen Hund angesprochen werden'

    },
    {
      id: 1,
      title: 'Platzmangel',
      text: 'Überfüllte Verkehrsmittel'
    },
    {
      id: 2,
      title: 'Sitzplatz suchen',
      text: 'Personen im ÖV fragen, ob der Platz noch frei ist'
    },
    {
      id: 3,
      title: 'Reiseweg',
      text: 'Reiseweg mit mehrmaligem Umsteigen'
    }
    ]

  },
  {
    id: 4,
    name: 'Pflege/Administratives',
    situations: [{
      id: 0,
      title: 'Haushalt',
      text: 'Den Haushalt angehen und nicht prokastinieren'

    },
    {
      id: 1,
      title: 'Behördentelefonate',
      text: 'Telefonate mit Krankenkasse und Umgang mit ihrer undeutlichen Kommunikation'
    },
    {
      id: 2,
      title: 'Einkaufen',
      text: 'Einkaufen bzw. zu wissen, was man überhaupt einkaufen muss '
    },
    {
      id: 3,
      title: 'Menschenmengen',
      text: 'Viele Menschen im Supermarkt, beim Arzt etc.'
    },
    {
      id: 4,
      title: 'Terminverzögerungen',
      text: 'Unpünktlichkeit von anderen Menschen'
    },
    {
      id: 5,
      title: 'Termine vereinbaren',
      text: 'Viele Menschen im Supermarkt, beim Arzt etc.'
    },
    {
      id: 6,
      title: 'Telefonieren',
      text: 'Anrufe tätigen'
    }
    ]

  },
  {
    id: 5,
    name: 'Sensorischen',
    situations: [{
      id: 0,
      title: 'Lärm',
      text: 'Umgang mit Geräuschen, die sich nicht vermeiden lassen. Beispielsweise eine Baustelle oder Rasenmäher.'

    },
    {
      id: 1,
      title: 'Taktiles',
      text: 'Unerwartete Berührungen'
    },
    {
      id: 2,
      title: 'Licht',
      text: 'Grelles oder helles Licht'
    }
    ]
  },
  {
    id: 6,
    name: 'Sonstiges',
    situations: [{
      id: 0,
      title: 'Orientierung',
      text: 'An neuen, unbekannten Orten die Orientierung finden'

    },
    {
      id: 1,
      title: 'Veränderungen',
      text: 'Veränderungen in der Routine'
    },
    {
      id: 2,
      title: 'Menschenkontakt',
      text: 'Von fremden Menschen angesprochen werden'
    }
    ]

  }
  ]
})
export const mutations = {
  addScocialTopic (state, addedSocialTopic) {
    state.socials.push({
      topictitle: addedSocialTopic.topictitle,
      topictext: addedSocialTopic.topictext,
      done: false,
      date: addedSocialTopic.date
    })
  },
  deleteSocialTopic (state, deletedSocialTopic) {
    const socialIndex = state.socials.indexOf(deletedSocialTopic)
    state.socials.splice(socialIndex, 1)
  },
  updateSocialTopic (state, updatedSocialTopic) {
    const socialIndex = state.socials.indexOf(updatedSocialTopic.old)
    state.socials[socialIndex].topictitle = updatedSocialTopic.new.topictitle
    state.socials[socialIndex].topictext = updatedSocialTopic.new.topictext
  }
}
export const getters = {
  getCategoryById: (state) => {
    return (id) => {
      return state.socials.filter(category => category.id === parseInt(id))
    }
  }
}
