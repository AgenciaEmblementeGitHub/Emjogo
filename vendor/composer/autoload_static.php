<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit10fc02b89a0d1e963a3c448a751e9505
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPJasper\\' => 10,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPJasper\\' => 
        array (
            0 => __DIR__ . '/..' . '/geekcom/phpjasper/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit10fc02b89a0d1e963a3c448a751e9505::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit10fc02b89a0d1e963a3c448a751e9505::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit10fc02b89a0d1e963a3c448a751e9505::$classMap;

        }, null, ClassLoader::class);
    }
}
