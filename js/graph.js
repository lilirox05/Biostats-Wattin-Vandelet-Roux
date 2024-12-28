//----------------------------------------MICRO ORGANISME----------------------------------------

//----------Graphique Micro 1 : Arboriculture----------
const ctxMicroArbo = document.getElementById('avisChartMicroArbo').getContext('2d');
const dataMicroArbo = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [8, 0, 0, 0], // Nombre d'avis pour chaque catégorie
        fill: false,  // Ne pas remplir sous la courbe
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1,  // Lissage de la courbe
    }]
};
new Chart(ctxMicroArbo, {
    type: 'line', // Type du graphique (ligne)
    data: dataMicroArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                display: true // Affiche la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Micro 2 : Culture Tropicale----------
const ctxMicroCT = document.getElementById('avisChartMicroCT').getContext('2d');
const dataMicroCT = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [3, 0, 0, 0], // Nombre d'avis pour chaque catégorie
        fill: false,  // Ne pas remplir sous la courbe
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1,  // Lissage de la courbe
    }]
};
new Chart(ctxMicroCT, {
    type: 'line', // Type du graphique (ligne)
    data: dataMicroCT,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Culture tropical"'
            },
            legend: {
                display: true // Affiche la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Micro 3 : Grande Culture----------
const ctxMicroGC = document.getElementById('avisChartMicroGC').getContext('2d');
const dataMicroGC = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [9, 1, 0, 3], // Nombre d'avis pour chaque catégorie
        fill: false,  // Ne pas remplir sous la courbe
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1,  // Lissage de la courbe
    }]
};
new Chart(ctxMicroGC, {
    type: 'line', // Type du graphique (ligne)
    data: dataMicroGC,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Grande culture "'
            },
            legend: {
                display: true // Affiche la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Micro 4 : Horticulture----------
const ctxMicroHorti = document.getElementById('avisChartMicroHorti').getContext('2d');
const dataMicroHorti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [9, 7, 0, 0], // Nombre d'avis pour chaque catégorie
        fill: false,  // Ne pas remplir sous la courbe
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1,  // Lissage de la courbe
    }]
};
new Chart(ctxMicroHorti, {
    type: 'line', // Type du graphique (ligne)
    data: dataMicroHorti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Horticulture "'
            },
            legend: {
                display: true // Affiche la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Micro 5 : Legume----------
const ctxMicroLegume = document.getElementById('avisChartMicroLegume').getContext('2d');
const dataMicroLegume = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [23, 11, 1, 7], // Nombre d'avis pour chaque catégorie
        fill: false,  // Ne pas remplir sous la courbe
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1,  // Lissage de la courbe
    }]
};
new Chart(ctxMicroLegume, {
    type: 'line', // Type du graphique (ligne)
    data: dataMicroLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: true // Affiche la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Micro 6 : Viticulture----------
const ctxMicroViti = document.getElementById('avisChartMicroViti').getContext('2d');
const dataMicroViti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [3, 0, 0, 0], // Nombre d'avis pour chaque catégorie
        fill: false,  // Ne pas remplir sous la courbe
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        tension: 0.1,  // Lissage de la courbe
    }]
};
new Chart(ctxMicroViti, {
    type: 'line', // Type du graphique (ligne)
    data: dataMicroViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Viticulture"'
            },
            legend: {
                display: true // Affiche la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});



//----------------------------------------MACRO ORGANISME----------------------------------------

//----------Graphique Macro 1 : Arboriculture----------
const ctxMacroArbo = document.getElementById('avisChartMacroArbo').getContext('2d');
const dataMacroArbo = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [8, 1, 1, 1],
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(201, 203, 207, 0.5)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMacroArbo, {
    type: 'bar',
    data: dataMacroArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Macro 2 : Grande Culture----------
const ctxMacroGC = document.getElementById('avisChartMacroGC').getContext('2d');
const dataMacroGC = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [5, 0, 0, 0],
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(201, 203, 207, 0.5)'
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMacroGC, {
    type: 'bar',
    data: dataMacroGC,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Grande Culture"'
            },
            legend: {
                display: false
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Macro 3 : Legume----------
const ctxMacroLegume = document.getElementById('avisChartMacroLegume').getContext('2d');
const dataMacroLegume = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'], // Catégories d'avis
    datasets: [{
        label: 'Nombre d\'avis',
        data: [50, 15, 13, 2], // Correspond au nombre pour chaque type d'avis
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMacroLegume, {
    type: 'bar', // Type de graphique
    data: dataMacroLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: false // Supprime la légende, car les labels suffisent
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence l'axe Y à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Macro 4 : Horticulture----------
const ctxMacroHorti = document.getElementById('avisChartMacroHorti').getContext('2d');
const dataMacroHorti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'], // Catégories d'avis
    datasets: [{
        label: 'Nombre d\'avis',
        data: [47, 4, 0, 7], // Correspond au nombre pour chaque type d'avis
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMacroHorti, {
    type: 'bar', // Type de graphique
    data: dataMacroHorti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "orticulture"'
            },
            legend: {
                display: false // Supprime la légende, car les labels suffisent
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence l'axe Y à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});


//----------Graphique Macro 5 : Viticulture----------
const ctxMacroViti = document.getElementById('avisChartMacroViti').getContext('2d');
const dataMacroViti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'], // Catégories d'avis
    datasets: [{
        label: 'Nombre d\'avis',
        data: [4, 0, 0, 0], // Correspond au nombre pour chaque type d'avis
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(201, 203, 207, 1)'
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMacroViti, {
    type: 'bar', // Type de graphique
    data: dataMacroViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Viticulture"'
            },
            legend: {
                display: false // Supprime la légende, car les labels suffisent
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence l'axe Y à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type d\'avis'
                }
            }
        }
    }
});



//----------------------------------------MEDIATEURS CHIMIQUES----------------------------------------

//----------Graphique MC 1 : Arboriculture----------

const ctxMCArbo = document.getElementById('avisChartMCArbo').getContext('2d');
const dataMCArbo = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Répartition des avis',
        data: [16, 0, 0, 0],  // Nombre d'avis pour chaque catégorie
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',  // Bordure pour "Bon"
            'rgba(255, 206, 86, 1)',  // Bordure pour "Mitigé"
            'rgba(255, 99, 132, 1)',  // Bordure pour "Insatisfaisant"
            'rgba(201, 203, 207, 1)'  // Bordure pour "Pas d'avis"
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMCArbo, {
    type: 'pie',  // Type de graphique: "pie" pour cercle
    data: dataMCArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                display: true  // Affiche la légende
            }
        }
    }
});


//----------Graphique MC 2 : Culture Tropicale----------

const ctxMCCT = document.getElementById('avisChartMCCT').getContext('2d');
const dataMCCT = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Répartition des avis',
        data: [1, 0, 0, 2],  // Nombre d'avis pour chaque catégorie
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',  // Bordure pour "Bon"
            'rgba(255, 206, 86, 1)',  // Bordure pour "Mitigé"
            'rgba(255, 99, 132, 1)',  // Bordure pour "Insatisfaisant"
            'rgba(201, 203, 207, 1)'  // Bordure pour "Pas d'avis"
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMCCT, {
    type: 'pie',  // Type de graphique: "pie" pour cercle
    data: dataMCCT,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Culture tropical"'
            },
            legend: {
                display: true  // Affiche la légende
            }
        }
    }
});


//----------Graphique MC 3 : Legume----------

const ctxMCLegume = document.getElementById('avisChartMCLegume').getContext('2d');
const dataMCLegume = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Répartition des avis',
        data: [2, 1, 0, 6],  // Nombre d'avis pour chaque catégorie
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',  // Bordure pour "Bon"
            'rgba(255, 206, 86, 1)',  // Bordure pour "Mitigé"
            'rgba(255, 99, 132, 1)',  // Bordure pour "Insatisfaisant"
            'rgba(201, 203, 207, 1)'  // Bordure pour "Pas d'avis"
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMCLegume, {
    type: 'pie',  // Type de graphique: "pie" pour cercle
    data: dataMCLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: true  // Affiche la légende
            }
        }
    }
});


//----------Graphique MC 4 : Viticulture----------

const ctxMCViti = document.getElementById('avisChartMCViti').getContext('2d');
const dataMCViti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Répartition des avis',
        data: [0, 0, 0, 1],  // Nombre d'avis pour chaque catégorie
        backgroundColor: [
            'rgba(75, 192, 192, 0.5)',  // Couleur pour "Bon"
            'rgba(255, 206, 86, 0.5)',  // Couleur pour "Mitigé"
            'rgba(255, 99, 132, 0.5)',  // Couleur pour "Insatisfaisant"
            'rgba(201, 203, 207, 0.5)'  // Couleur pour "Pas d'avis"
        ],
        borderColor: [
            'rgba(75, 192, 192, 1)',  // Bordure pour "Bon"
            'rgba(255, 206, 86, 1)',  // Bordure pour "Mitigé"
            'rgba(255, 99, 132, 1)',  // Bordure pour "Insatisfaisant"
            'rgba(201, 203, 207, 1)'  // Bordure pour "Pas d'avis"
        ],
        borderWidth: 1
    }]
};
new Chart(ctxMCViti, {
    type: 'pie',  // Type de graphique: "pie" pour cercle
    data: dataMCViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: true  // Affiche la légende
            }
        }
    }
});



//----------------------------------------SUBSTANCE NATURELLE----------------------------------------

//----------Graphique SN 1 : Arboriculture----------

const ctxSNArbo = document.getElementById('avisChartSNArbo').getContext('2d');
const dataSNArbo = {
    labels: ['Arboriculture'], // Une seule catégorie pour la filière
    datasets: [{
        label: 'Bon',
        data: [15], // Nombre d'avis "Bon"
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [8], // Nombre d'avis "Mitigé"
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [1], // Nombre d'avis "Insatisfaisant"
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [1], // Nombre d'avis "Pas d'avis"
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNArbo, {
    type: 'bar', // Type de graphique : barres
    data: dataSNArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                position: 'top' // Position de la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Filière'
                }
            }
        },
        // On active le mode empilé ici
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        // Configuration des axes empilés
        scales: {
            x: {
                stacked: true, // Empilement des barres sur l'axe X
            },
            y: {
                stacked: true, // Empilement des barres sur l'axe Y
            }
        }
    }
});


//----------Graphique SN 2 : Culture Tropicale----------
const ctxSNCT = document.getElementById('avisChartSNCT').getContext('2d');
const dataSNCT = {
    labels: ['Culture tropicale'], // Une seule catégorie pour la filière
    datasets: [{
        label: 'Bon',
        data: [4], // Nombre d'avis "Bon"
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [0], // Nombre d'avis "Mitigé"
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0], // Nombre d'avis "Insatisfaisant"
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [0], // Nombre d'avis "Pas d'avis"
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNCT, {
    type: 'bar', // Type de graphique : barres
    data: dataSNCT,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Culture tropicale"'
            },
            legend: {
                position: 'top' // Position de la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Filière'
                }
            }
        },
        // On active le mode empilé ici
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        // Configuration des axes empilés
        scales: {
            x: {
                stacked: true, // Empilement des barres sur l'axe X
            },
            y: {
                stacked: true, // Empilement des barres sur l'axe Y
            }
        }
    }
});


//----------Graphique SN 3 : Grande Culture----------

const ctxSNGC = document.getElementById('avisChartSNGC').getContext('2d');
const dataSNGC = {
    labels: ['Grande culture'], // Une seule catégorie pour la filière
    datasets: [{
        label: 'Bon',
        data: [8], // Nombre d'avis "Bon"
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [0], // Nombre d'avis "Mitigé"
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0], // Nombre d'avis "Insatisfaisant"
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [0], // Nombre d'avis "Pas d'avis"
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNGC, {
    type: 'bar', // Type de graphique : barres
    data: dataSNGC,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Grande culture"'
            },
            legend: {
                position: 'top' // Position de la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Filière'
                }
            }
        },
        // On active le mode empilé ici
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        // Configuration des axes empilés
        scales: {
            x: {
                stacked: true, // Empilement des barres sur l'axe X
            },
            y: {
                stacked: true, // Empilement des barres sur l'axe Y
            }
        }
    }
});


//----------Graphique SN 4 : Horticulture----------

const ctxSNHorti = document.getElementById('avisChartSNHorti').getContext('2d');
const dataSNHorti = {
    labels: ['Horticulture'], // Une seule catégorie pour la filière
    datasets: [{
        label: 'Bon',
        data: [7], // Nombre d'avis "Bon"
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [0], // Nombre d'avis "Mitigé"
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0], // Nombre d'avis "Insatisfaisant"
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [0], // Nombre d'avis "Pas d'avis"
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNHorti, {
    type: 'bar', // Type de graphique : barres
    data: dataSNHorti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Horticulture"'
            },
            legend: {
                position: 'top' // Position de la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Filière'
                }
            }
        },
        // On active le mode empilé ici
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        // Configuration des axes empilés
        scales: {
            x: {
                stacked: true, // Empilement des barres sur l'axe X
            },
            y: {
                stacked: true, // Empilement des barres sur l'axe Y
            }
        }
    }
});


//----------Graphique SN 5 : Legume----------

const ctxSNLegume = document.getElementById('avisChartSNLegume').getContext('2d');
const dataSNLegume = {
    labels: ['Legume'], // Une seule catégorie pour la filière
    datasets: [{
        label: 'Bon',
        data: [32], // Nombre d'avis "Bon"
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [7], // Nombre d'avis "Mitigé"
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [4], // Nombre d'avis "Insatisfaisant"
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [9], // Nombre d'avis "Pas d'avis"
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNLegume, {
    type: 'bar', // Type de graphique : barres
    data: dataSNLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                position: 'top' // Position de la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Filière'
                }
            }
        },
        // On active le mode empilé ici
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        // Configuration des axes empilés
        scales: {
            x: {
                stacked: true, // Empilement des barres sur l'axe X
            },
            y: {
                stacked: true, // Empilement des barres sur l'axe Y
            }
        }
    }
});


//----------Graphique SN 6 : Viticulture----------

const ctxSNViti = document.getElementById('avisChartSNViti').getContext('2d');
const dataSNViti = {
    labels: ['Viticulture'], // Une seule catégorie pour la filière
    datasets: [{
        label: 'Bon',
        data: [16], // Nombre d'avis "Bon"
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [2], // Nombre d'avis "Mitigé"
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0], // Nombre d'avis "Insatisfaisant"
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [1], // Nombre d'avis "Pas d'avis"
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNViti, {
    type: 'bar', // Type de graphique : barres
    data: dataSNViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                position: 'top' // Position de la légende
            }
        },
        scales: {
            y: {
                beginAtZero: true, // Commence à zéro
                title: {
                    display: true,
                    text: 'Nombre d\'avis'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Filière'
                }
            }
        },
        // On active le mode empilé ici
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        // Configuration des axes empilés
        scales: {
            x: {
                stacked: true, // Empilement des barres sur l'axe X
            },
            y: {
                stacked: true, // Empilement des barres sur l'axe Y
            }
        }
    }
});















