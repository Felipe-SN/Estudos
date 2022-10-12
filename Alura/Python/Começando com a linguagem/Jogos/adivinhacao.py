from turtle import goto


print('*********************************')
print('Bem-vindo ao Jogo de Adivinhação!')
print('*********************************')

numero_secreto = 42

chute_str = input('Digite o seu numero: ')

print('Você Digitou: ', chute_str)

chute_int = int(chute_str)

if (chute_int == numero_secreto):
    print('Você Acertou,', chute_int, 'é o Numero Correto!')
else:
    print('Você Errou,', chute_int, 'Não é o Numero Correto!')

print('Fim d Jogo!')
