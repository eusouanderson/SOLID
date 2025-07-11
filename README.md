# 📚 Princípios SOLID de Design Orientado a Objetos

Os princípios **SOLID** são cinco regras fundamentais para o design de software que ajudam a criar sistemas flexíveis, manuteníveis e escaláveis.

---

## 🔹 O que é SOLID?

SOLID é um acrônimo que representa cinco princípios criados por Robert C. Martin (Uncle Bob) para orientar o design de sistemas orientados a objetos:

| Letra | Princípio                       | Descrição rápida                                               |
| ----- | ------------------------------- | -------------------------------------------------------------- |
| **S** | Single Responsibility Principle | Responsabilidade Única                                         |
| **O** | Open/Closed Principle           | Aberto para extensão, fechado para modificação                 |
| **L** | Liskov Substitution Principle   | Substituição de subclasses sem quebrar o sistema               |
| **I** | Interface Segregation Principle | Segregação de interfaces específicas                           |
| **D** | Dependency Inversion Principle  | Inversão de dependência: abstrações ao invés de implementações |

---

## 1️⃣ Single Responsibility Principle (SRP)

### **Cada classe deve ter uma única responsabilidade, uma única razão para mudar.**

- 📌 **Por que?** Evita acoplamento forte e facilita manutenção.
- 🔍 **O que evita?** Classes gigantes com várias responsabilidades misturadas.
- 🛠 **Exemplo prático:**
  - Uma classe `Relatorio` só deve gerar relatórios.
  - A persistência dos dados fica numa classe separada `RelatorioRepository`.

```python
class Relatorio:
    def gerar_relatorio(self, dados):
        # lógica para gerar relatório
        pass

class RelatorioRepository:
    def salvar(self, relatorio):
        # lógica para salvar em banco
        pass
```
