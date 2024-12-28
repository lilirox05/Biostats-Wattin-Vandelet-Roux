//----------------------------------------MICRO ORGANISME----------------------------------------

//----------Graphique Micro 1 : Arboriculture----------
const ctxMicroArbo = document.getElementById('avisChartMicroArbo').getContext('2d');
const dataMicroArbo = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [8, 0, 0, 0],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
    }]
};
new Chart(ctxMicroArbo, {
    type: 'line',
    data: dataMicroArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                display: true
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


//----------Graphique Micro 2 : Culture Tropicale----------
const ctxMicroCT = document.getElementById('avisChartMicroCT').getContext('2d');
const dataMicroCT = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [3, 0, 0, 0],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
    }]
};
new Chart(ctxMicroCT, {
    type: 'line',
    data: dataMicroCT,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Culture tropical"'
            },
            legend: {
                display: true
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


//----------Graphique Micro 3 : Grande Culture----------
const ctxMicroGC = document.getElementById('avisChartMicroGC').getContext('2d');
const dataMicroGC = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [9, 1, 0, 3],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
    }]
};
new Chart(ctxMicroGC, {
    type: 'line',
    data: dataMicroGC,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Grande culture "'
            },
            legend: {
                display: true
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


//----------Graphique Micro 4 : Horticulture----------
const ctxMicroHorti = document.getElementById('avisChartMicroHorti').getContext('2d');
const dataMicroHorti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [9, 7, 0, 0],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
    }]
};
new Chart(ctxMicroHorti, {
    type: 'line',
    data: dataMicroHorti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Horticulture "'
            },
            legend: {
                display: true
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


//----------Graphique Micro 5 : Legume----------
const ctxMicroLegume = document.getElementById('avisChartMicroLegume').getContext('2d');
const dataMicroLegume = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [23, 11, 1, 7],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
    }]
};
new Chart(ctxMicroLegume, {
    type: 'line',
    data: dataMicroLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: true
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


//----------Graphique Micro 6 : Viticulture----------
const ctxMicroViti = document.getElementById('avisChartMicroViti').getContext('2d');
const dataMicroViti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [3, 0, 0, 0],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
    }]
};
new Chart(ctxMicroViti, {
    type: 'line',
    data: dataMicroViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Viticulture"'
            },
            legend: {
                display: true
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
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [50, 15, 13, 2],
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
new Chart(ctxMacroLegume, {
    type: 'bar',
    data: dataMacroLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
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


//----------Graphique Macro 4 : Horticulture----------
const ctxMacroHorti = document.getElementById('avisChartMacroHorti').getContext('2d');
const dataMacroHorti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [47, 4, 0, 7],
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
new Chart(ctxMacroHorti, {
    type: 'bar',
    data: dataMacroHorti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Horticulture"'
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


//----------Graphique Macro 5 : Viticulture----------
const ctxMacroViti = document.getElementById('avisChartMacroViti').getContext('2d');
const dataMacroViti = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Nombre d\'avis',
        data: [4, 0, 0, 0],
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
new Chart(ctxMacroViti, {
    type: 'bar',
    data: dataMacroViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Viticulture"'
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



//----------------------------------------MEDIATEURS CHIMIQUES----------------------------------------

//----------Graphique MC 1 : Arboriculture----------

const ctxMCArbo = document.getElementById('avisChartMCArbo').getContext('2d');
const dataMCArbo = {
    labels: ['Bon', 'Mitigé', 'Insatisfaisant', 'Pas d\'avis'],
    datasets: [{
        label: 'Répartition des avis',
        data: [16, 0, 0, 0],
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
new Chart(ctxMCArbo, {
    type: 'pie',
    data: dataMCArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                display: true
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
        data: [1, 0, 0, 2],
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
new Chart(ctxMCCT, {
    type: 'pie',
    data: dataMCCT,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Culture tropical"'
            },
            legend: {
                display: true
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
        data: [2, 1, 0, 6],
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
new Chart(ctxMCLegume, {
    type: 'pie',
    data: dataMCLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: true
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
        data: [0, 0, 0, 1],
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
new Chart(ctxMCViti, {
    type: 'pie',
    data: dataMCViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                display: true
            }
        }
    }
});



//----------------------------------------SUBSTANCE NATURELLE----------------------------------------

//----------Graphique SN 1 : Arboriculture----------

const ctxSNArbo = document.getElementById('avisChartSNArbo').getContext('2d');
const dataSNArbo = {
    labels: ['Arboriculture'],
    datasets: [{
        label: 'Bon',
        data: [15],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [8],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [1],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [1],
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNArbo, {
    type: 'bar',
    data: dataSNArbo,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Arboriculture"'
            },
            legend: {
                position: 'top'
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
                    text: 'Filière'
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    }
});


//----------Graphique SN 2 : Culture Tropicale----------
const ctxSNCT = document.getElementById('avisChartSNCT').getContext('2d');
const dataSNCT = {
    labels: ['Culture tropicale'],
    datasets: [{
        label: 'Bon',
        data: [4],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [0],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [0],
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNCT, {
    type: 'bar',
    data: dataSNCT,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Culture tropicale"'
            },
            legend: {
                position: 'top'
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
                    text: 'Filière'
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    }
});


//----------Graphique SN 3 : Grande Culture----------

const ctxSNGC = document.getElementById('avisChartSNGC').getContext('2d');
const dataSNGC = {
    labels: ['Grande culture'],
    datasets: [{
        label: 'Bon',
        data: [8],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [0],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [0],
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNGC, {
    type: 'bar',
    data: dataSNGC,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Grande culture"'
            },
            legend: {
                position: 'top'
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
                    text: 'Filière'
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    }
});


//----------Graphique SN 4 : Horticulture----------

const ctxSNHorti = document.getElementById('avisChartSNHorti').getContext('2d');
const dataSNHorti = {
    labels: ['Horticulture'],
    datasets: [{
        label: 'Bon',
        data: [7],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [0],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [0],
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNHorti, {
    type: 'bar',
    data: dataSNHorti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Horticulture"'
            },
            legend: {
                position: 'top'
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
                    text: 'Filière'
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    }
});


//----------Graphique SN 5 : Legume----------

const ctxSNLegume = document.getElementById('avisChartSNLegume').getContext('2d');
const dataSNLegume = {
    labels: ['Legume'],
    datasets: [{
        label: 'Bon',
        data: [32],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [7],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [4],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [9],
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNLegume, {
    type: 'bar',
    data: dataSNLegume,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                position: 'top'
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
                    text: 'Filière'
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    }
});


//----------Graphique SN 6 : Viticulture----------

const ctxSNViti = document.getElementById('avisChartSNViti').getContext('2d');
const dataSNViti = {
    labels: ['Viticulture'],
    datasets: [{
        label: 'Bon',
        data: [16],
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
    }, {
        label: 'Mitigé',
        data: [2],
        backgroundColor: 'rgba(255, 206, 86, 0.6)'
    }, {
        label: 'Insatisfaisant',
        data: [0],
        backgroundColor: 'rgba(255, 99, 132, 0.6)'
    }, {
        label: 'Pas d\'avis',
        data: [1],
        backgroundColor: 'rgba(201, 203, 207, 0.6)'
    }]
};
new Chart(ctxSNViti, {
    type: 'bar',
    data: dataSNViti,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Répartition des avis sur la filière "Legume"'
            },
            legend: {
                position: 'top'
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
                    text: 'Filière'
                }
            }
        },
        elements: {
            bar: {
                borderWidth: 2
            }
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            }
        }
    }
});



