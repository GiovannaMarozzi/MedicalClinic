create table consultas(

    id bigint not null auto_increment,
    nome varchar(20) not null,
    cpf varchar(20) not null unique,
    doutor varchar(20) not null,
    especialidade varchar(20) not null,
    convenio varchar(20),
    data varchar(20),
    hora varchar(20),
    primary key(id)

);