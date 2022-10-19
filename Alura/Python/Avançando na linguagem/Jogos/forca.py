def jogar():
    print('')
    print('*************************************')
    print('**** Bem-vindo ao Jogo da Forca! ****')
    print('*************************************')

    palavra_secreta = 'barbarian'

    enforcado = False
    acertou = False
    total_de_tentativas = 5
    rodada = 1

    # while (not enforcado and not acertou):
    while (rodada <= total_de_tentativas):
        print('\njogando...')

        chute = input('\nDigite seu chute: ').strip()
        index = 0
        encontrou = False

        for letra in palavra_secreta:
            if (chute.upper() == letra.upper()):
                encontrou = True
                print('A letra {} foi encontrada na posição {}'.format(letra, index))
            index = index + 1

        if (not encontrou):
            print('A letra digitada não foi encontrada na palavra.')

        rodada = rodada + 1

    print('\nFim de Jogo!')


if (__name__ == '__main__'):
    jogar()
