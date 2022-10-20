import forca
import adivinhacao


def escolher_jogo():
    print('')
    print('*************************************')
    print('********* Escolha seu jogo! *********')
    print('*************************************', end='\n\n')
    print('(1) - Forca\n(2) - Adivinhação', end='\n\n')

    jogo = int(input('Digite sua escolha: '))

    if (jogo == 1):
        print('jogando Forca')
        forca.jogar()
    elif (jogo == 2):
        print('jogando Forca')
        adivinhacao.jogar()


if (__name__ == '__main__'):
    escolher_jogo()
