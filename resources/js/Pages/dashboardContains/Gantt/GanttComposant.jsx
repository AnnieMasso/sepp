import React, {Component, useEffect} from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

export default class Gantt extends Component{
    // configuration du digramme de gantt (echelle, colonnes)

    componentDidMount(){
        gantt.config.scales = [
            { unit: 'month', step: 1, format: "%M" },
            { unit: "year", step:1, format:"%Y" },
            { unit: "day", step:1, format:"%d" },
        ];
        gantt.config.date_format = "%Y-%m-%d %H:%i";
        
        gantt.config.grid_resize = true
        // gantt.config.resize_rows = true
        gantt.config.grid_resizer_column_attribute = "column_index"
        gantt.config.grid_resizer_attribute = "grid_resizer";

        gantt.config.columns = [
            {name: 'text', label: 'Nom de la tache', tree: 'true', align: 'start', resize: "true", width: "150",
                template: (tache) => {
                    return `<span style="font-size: 9px;">${tache.text}</span>`;
                }
            },
            {name: 'start_date', label: 'Date de début', tree: 'true', align: 'start', resize: 'true', width: '100',
                template: (tache) => {
                    return `<span style="font-size: 8px;">${tache.start_date}</span>`;
                }
            },
            {name: 'end_date', label: 'Date de fin', tree: 'true', align: 'start', resize: 'true', width: '75',
                 template: (tache) => {
                    return `<span style="font-size: 8px;">${tache.end_date}</span>`;
                }
            },
            {name: 'SpeedProgress', label: 'Progression', tree: 'true', align: 'start', resize: 'true', width: '100', template:
                function(tache){
                    const tache_en_percent = Math.round(tache.progress*100) + "%";
                    return `<span style="font-size: 8px;">${tache_en_percent}</span>`;
                    // return Math.round(tache.progress*100) + "%";
                    
                },
            },
            {name: 'priority', label: 'Priorité', tree: "true", align: 'start', resize: 'true', width: '50', template:
                function(objet){
                    if (objet.priority == 1) {
                        return `<span style="font-size: 8px;">Elevée</span>`
                    }
                    if (objet.priority == 2){
                        return `<span style="font-size: 8px;">Moyenne</span>`;
                    }
                    return `<span style="font-size: 8px;">Basse</span>`;
                },
            },
            {name: 'assigned', label: 'Utilisateurs', tree: 'true', align: 'start', resize: 'true', width: "100", template: function(item){
                if (!item.users) return "Personne";
                // return item.users.join(',');
                const users = item.users.join(',');
                return `<span style="font-size: 8px;">${users}(',')</span>`
            }},
            {name: 'add'},
        ];

        gantt.templates.task_class = function(start, end, tache){
            return "bg-blue-600 border-blue-700 rounded-md text-blue"; 
            switch(tache.priority){
                case '1':
                    return 'E';
                case "2":
                    return 'M';
                case '3': 
                    return 'B';
                default:
                    return 'B';
            }
        };

        gantt.templates.task_text = function(start, end, task){
            return `<span class="font-semibold text-xs">${task.text}</span>`;
        };

        // affectation des taches aux users
        gantt.config.lightbox.sections = [
            {name: "description", height: 38, map_to: "text", type: "textarea", focus: true},
            {name: "owner", height: 38, map_to: "user_id", type:"select", options: gantt.serverList("assigned")},
            {name: "time", height: 72, map_to: "auto", type: "duration"},
            // {name: "priority", height: 72, map_to: "number", type: "number", focus: true}
        ];

        
        this.initGanttDataProcessor();
        const {taches} = this.props;
        gantt.init(this.ganttContainer);
        gantt.parse(taches);
    }

    initZoom(){
        gantt.ext.zoom.init({
            levels: [
                {
                    name: 'Hours',
                    scales_height: 60,
                    min_column_width: 30,
                    scales:[
                        {unit: 'day', step: 1, format: '%d'},
                        {unit: 'hour', step: 1, format: "%H"}
                    ],
                },
                {
                    name: 'Days',
                    scale_height: 60,
                    min_column_width: 70,
                    scales: [
                        {unit: 'week', step: 1, format: 'Week #%W'},
                        {unit: 'day', step: 1, format: '%d'},
                    ],
                },
                // {
                //     name: 'Months',
                //     scale_height: 60,
                //     min_column_width: 70,
                //     scales: [
                //         {unit: 'month', step: 1, format: '%F'},
                //         {unit: 'week', step: "1", format: '#%W'},
                //     ],
                // },
            ],
        });
    }

    setZoom(value){
        if (!gantt.$initialized) {
            this.initZoom();
        }
        gantt.ext.zoom.setLevel(value);
    }

    shouldComponentUpdate(nextProps){
        return this.props.zoom !== nextProps.zoom;
    }

    componentDidUpdate(){
        gantt.render();
    }

    initGanttDataProcessor(){
        const onDataUpdated = this.props.onDataUpdated;
        this.dataProcessor = gantt.createDataProcessor(
            (entityType, action, item, id) =>{
                return new Promise((resole, reject) => {
                    if (onDataUpdated) {
                        onDataUpdated(entityType, action, item, id);
                    }
                    return resole();
                });
            }
        );
    }

    componentWillUnmount(){
        if (this.dataProcessor) {
            this.dataProcessor.destructor();
            this.dataProcessor.null();
        }
    }

    render(){
        // const {zoom} = this.props;
        // this.setZoom(zoom);
        return(
            <div className="w-screen text-blue-900 text-xs h-screen" ref={(input) =>{
                this.ganttContainer = input;
            }}>

            </div>
        );
    }

}