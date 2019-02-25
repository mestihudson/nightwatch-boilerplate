Feature: Criar Risco
  Scenario: Como Elaborador
    Given eu sou um elaborador de uma unidade
    When eu crio um novo risco
    Then eu visualizo o mesmo na lista
