import random


def jogar():
    print('*************************************')
    print('**** Bem-vindo ao Jogo da Forca! ****')
    print('*************************************')

    with open('Python\Avançando na linguagem\Jogos\palavras.txt', 'r') as arquivo:
        lista_palavras = [palavra.strip() for palavra in arquivo]

    random_index = random.randrange(0, len(lista_palavras))
    palavra_secreta = lista_palavras[random_index].upper()
    letras_acertadas = ['_' for letra in palavra_secreta]
    enforcado = False
    acertou = False
    erros = 0
    total_erros = 6

    print('\njogando...')
    print('\n', letras_acertadas)

    while (not enforcado and not acertou):
        chute = input('\nDigite seu chute: ').strip().upper()
        index = 0

        if (chute in palavra_secreta):
            for letra in palavra_secreta:
                if (chute == letra):
                    letras_acertadas[index] = letra
                index += 1
        else:
            erros += 1
            print('Ops, você errou!.\nFaltam {} tentativas'.format(
                abs(erros - total_erros)))

        enforcado = erros == total_erros
        acertou = '_' not in letras_acertadas

        print('\n', letras_acertadas)

    print('\nFim de Jogo!')


if (__name__ == '__main__'):
    jogar()
