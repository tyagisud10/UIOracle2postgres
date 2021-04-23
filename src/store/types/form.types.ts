export const SourceConfig = {
    "username": {name: 'username', type: 'text', placeholder: 'hr', required: true},
    "host": {name: 'host', type: 'text', placeholder: 'oracle', required: true},
    "port": {name: 'port', type: 'integer', placeholder: '5432', required: true},
    "database": {name: 'database', type: 'text', placeholder: 'oracle', required: true},
    "password": {name: 'password', type: 'text', placeholder: 'sudh@123'},
    "schema_list": {name: 'schema list', type: 'text', placeholder: "hr, ab"}
}
export const TargetConfig = {
    "username": {name: 'username', type: 'text', placeholder: 'Sudhakar', required: true},
    "host": {name: 'host', type: 'text', placeholder: 'localhost', required: true},
    "port": {name: 'port', type: 'integer', placeholder: '5432', required: true},
    "database": {name: 'database', type: 'text', placeholder: 'hr', required: true},
    "password": {name: 'password', type: 'text', default: 'sudh@123', required: true}}
export const MigrationConfig = {
    "load_type": {name: 'Load Type', type: 'select', options: ['full', 'schema'], default: 'full'},
    "trialrun": {name: 'Trial run', type: 'select', options: [true, false], default: false},
    "batchsize": {name: 'Batch Size', type:'integer', placeholder: 1000, required: true},
    "logged": {name: 'Logged', type: 'select', options: [true, false], default: false},
    "multiprocess": {name: 'Multi Process', type: 'select', options: [true, false], default: true},
    "processes": {name: 'Processes', type: 'integer', dependsOn:'multiprocess', placeholder: 1, required: true}}