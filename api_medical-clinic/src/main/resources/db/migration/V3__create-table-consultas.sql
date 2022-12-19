create table consultas(

    id bigint not null auto_increment,
    nome varchar(100) not null,
    cpf varchar(100) not null unique,
    doutor varchar(100) not null,
    especialidade varchar(100) not null,
    convenio varchar(100),
    data varchar(100),
    hora varchar(100),
    primary key(id)

);