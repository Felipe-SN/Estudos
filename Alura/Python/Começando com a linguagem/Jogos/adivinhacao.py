from turtle import goto


print('*********************************')
print('Bem-vindo ao Jogo de Adivinhação!')
print('*********************************')

numero_secreto = 42

chute_str = input('Digite o seu numero: ')

print('Você Digitou: ', chute_str)

chute_int = int(chute_str)

acertou = chute_int == numero_secreto
chute_foi_maior = chute_int > numero_secreto
chute_foi_menor = chute_int < numero_secreto

if (acertou):
    print('Você Acertou,', chute_int, 'é o Numero Correto!')
elif (chute_foi_maior):
    print('Você Errou,', chute_int, 'é maior que o Numero Correto!')
elif (chute_foi_menor):
    print('Você Errou,', chute_int, 'é menor que o Numero Correto!')

print('Fim de Jogo!')
