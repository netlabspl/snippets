<?php

namespace AppBundle\DataFixtures;

class FixturesOrdering
{
    protected static $ordering = [
        'User',
    ];

    /**
     * @param $name
     *
     * @return int|string
     */
    public static function getOrdering($name)
    {
        foreach (self::$ordering as $key => $item) {
            if ($item == $name) {
                return $key;
            }
        }
    }
}
