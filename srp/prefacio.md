SOLID 

É um acrônimo que representa cinco principios de design orientados a objetos , criados por Robert
C. Martin (Uncle Bob ), que ajudam a tornar o código mais flexivel compreensivel e fácil de manter. Eles são fundamentais para uma boa arquitertura de software.

1. S- Single Responsibility Principle 
Cada classe deve ter apenas uma reazão para mudar, ou seja , uma única responsabilidade . 
Seprar responsabilidades evitar acomplamento e facilirtar testes/manutenção.

Exemplo. 

Separar a lógica de persistência(User_Repository) da lógica de negócio (UserService).
